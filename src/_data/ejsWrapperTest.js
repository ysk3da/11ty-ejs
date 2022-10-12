let ejs = require("ejs");

module.exports = {
  TestFunc: ()=> {
    console.log("test");
    users = ['geddy', 'neil', 'alex'];
    let temp = ejs.render('<TestFunc- users.join(" | "); TestFunc><div>ここ</div>', {users: users},
    {delimiter: 'TestFunc'});
    console.log(temp);
    // 動的にタグ名を変更できそうだが、エラーになったときとかのチェックがだめかも。。、
  }
}