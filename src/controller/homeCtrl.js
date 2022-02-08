import connection from '../configs/connnectDB'


let getHomePage = (rerq, res) => {
    // logic
    let data = []
    // simple query
    connection.query(
        'SELECT * FROM `users` ',
        function (err, results, fields) {
            results.map((row) => {
                data.push({
                    id: row.id,
                    firstName: row.firstName,
                    lastName: row.lastName,
                    email: row.email,
                    address: row.address
                })
            });

            return res.render('index.ejs', { data: JSON.stringify(data) })
        }

    );

}

module.exports = {
    getHomePage
}