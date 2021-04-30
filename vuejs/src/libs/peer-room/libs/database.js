import Dexie from 'dexie'

export default class Database{
	constructor (objects, PeerRoom ){
		console.log('Db init', objects, PeerRoom );

		this.ready = false
		this.PeerRoom = PeerRoom

		this.db_name = PeerRoom.host_peer_id

		this.db = new Dexie('PeerDB-'+this.db_name)
		this.stores = {}
		this.default_cols = "++id,&uid,timestamp,peer"
		for (const [key, object] of Object.entries(objects)) {
			//console.log('db object',key,object);
			this.stores[key] = this.default_cols
			for (const [label/*, type*/] of Object.entries(object)) {
				//console.log('db object',label, type);
				this.stores[key] += ','+label
			}
		}
		
		this.db.version(1).stores( this.stores )
		
		this.db.open().then( () => {
			PeerRoom.event('database:ready', this )
		}).catch(err => {
			PeerRoom.event('database:error', err )
			PeerRoom.event('database:ready', this )
		})

		PeerRoom.on('receive:save', (data) => {
			this.save(data.key, data.data, null, false, data.peer)
		})
	}

	save(key, data, callback = null, share = true, peer = null){

		data.timestamp = Date.now()
		data.peer = this.PeerRoom.user_peer_id
		if( peer != null ) 
		{
			data.peer = peer
		}
		
		try{
			
			this.db.close()	
		}
		catch(err) {console.log(err);}
		
		this.db = new Dexie('PeerDB-'+this.db_name)

		this.db.version(2).stores( this.stores )

		this.db.open(); 

		// Do some application logic on the database:
		this.db.transaction("rw", this.db[key], () => {
			this.db[key].add(data)

			this.PeerRoom.event('database:save:'+key, this )

			if( callback != null ) callback()

		}).catch (function (e) {
			console.error(e.stack || e);
		});

		if( share )
		{
			this.PeerRoom.send_to_all({
				save : {
					key : key,
					data : data
				}
			})
		}
		//this.event('update_data', {key: key, data: data, db: this.db[key]})

	}

	get(key, query = null, callback = null){

		if( callback == null )
		{
			callback = query
		}

		//var currentVersion = this.db.verno;
		this.db.close()
		this.db = new Dexie('PeerDB-'+this.db_name)
		this.db.version(2).stores( this.stores )

		this.db.open().then(()=>{
			this.db.table(key).toArray().then( (result) => {
				callback(result)
			})
		})
		
	}
}