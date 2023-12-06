
    let data = [
        {id: 1, name: "salim", email: "salim@gm.com"},
        {id: 2, name: "asif", email: "asif@gm.com"},
    ]

    function readAll() {
        var tbdata = document.querySelector(".table_data");

        data.map(d => (
            elements += `<tr>
                <td>${d.name}</td>
                <td>${d.email}</td>
                <td>
                    <button>Update</button>
                    <button>Delete</button>
                </td>
            </tr>`
        ))
        tbdata.innerHTML = elements;
    }
