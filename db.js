const { Client } = require('pg');
const client = new Client({ 
    connectionString:  process.env.DB_CONNECTION,
    ssl: { rejectUnauthorized: false }
 });

 client.connect();
async function getStackForMember(memberId) {
    const res = await client.query(`SELECT * FROM stack_member JOIN stack ON stack.stack_id = stack_member.stack_id WHERE member_id = '${memberId}';`);
    var results = [];
    for (var i = 0; i < res.rows.length; i++) {
        results.push(res.rows[i].stack_literal);
    }
    return results;
}

async function endConnection() { 
    await client.end();
}

module.exports = { getStackForMember, endConnection };