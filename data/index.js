const pool = require('./connect')

async function GetStudents(){
    const [students] = await pool.execute('SELECT * FROM todolist')
    return students
}

async function PostStudents({name}){
    console.log('A1',name)
    const data = await pool.query(`insert into todolist(firstname) value('${name}')`)
    return data
}

async function PutStudents({name,id}){
    console.log('A0',name,id)
    const baz = await pool.query(`update set firstname='${name}' where id=${id}`)
    return baz
}

async function DeleteStudents(id){
    console.log(`A!`,id)
    const del = await pool.query(`delete from todolist where id=${id}`)
    return del
}




module.exports = {
    GetStudents: GetStudents,
    PostStudents: PostStudents,
    PutStudents: PutStudents,
    DeleteStudents: DeleteStudents,
}