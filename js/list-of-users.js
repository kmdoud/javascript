var users = 
[
    {id: 1, username: "superman", password: "sa", firstname: "super", lastname: "admin", phone: "513-555-1234", email: "test", isReviewer: true, isAdmin: true },
    {id: 2, username: "normal", password:"nu", firstname: "normal", lastname: "user", phone: "513-111-2222", email:"test2", isReviewer: false, isAdmin: true},
    {id: 3, username: "pleb", password: "pb", firstname: "pleb", lastname: "user", phone: "513-333-4444", email:"test3",isReviewer: false, isAdmin: false},
    {id: 4, username: "low", password: "low", firstname: "low", lastname: "user", phone:"513-666-5555", email: "test4", isReviewer: true, isAdmin:false},
    {id: 5, username: "god", password: "test", firstname: "god", lastname: "almighty",phone:"513-777-8888",email:"test5",isReviewer:true, isAdmin: true }
];

function loaded()
{
    buildUserTable();

}

function buildUserTable()
{
    var tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(var user of users)
    {
        var tr = "<tr>";
        tr +="<td class = 'center'>" + user.id + "</td>"
        tr +="<td>" + user.username + "</td>"
        tr +="<td>" + user.password + "</td>"
        tr +="<td>" + user.firstname + " " + user.lastname + "</td>"
        tr +="<td>" + user.phone + "</td>"
        tr +="<td>" + user.email + "</td>"
        tr +="<td class = 'center'>" +(user.isReviewer ? "yes" : "no")+ "</td>"
        tr +="<td class = 'center'>" +(user.isAdmin ? "yes" : "no") + "</td>"
        tr += "</tr>";

        tbodyCtrl.innerHTML+= tr;
    }

}