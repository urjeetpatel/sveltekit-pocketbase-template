migrate((app) => {
    let superusers = app.findCollectionByNameOrId('_superusers')
    let record = new Record(superusers)
    record.set('email', $os.getenv('INITIAL_SUPERUSER_EMAIL'))
    record.set('password', $os.getenv('INITIAL_SUPERUSER_PASSWORD'))

    app.save(record)
}, (app) => {
    try {
        let record = app.findAuthRecordByEmail('_superusers', $os.getenv('INITIAL_SUPERUSER_EMAIL'))
        record.delete()
    } catch {
    }
})
