const labs = [{
    area:'Mississauga',
    labId: 470,
    address1: "306 - 3024 Hurontario St ",
    city: "Mississauga",
    province: "ON",
    postalCode: "L5B 4M4",
    contact: {
        phone: 9053061580,
        fax: 9053067077
    },
    operationHours:{
        mon:{
            start: "0800",
            end: "1600"
        },
        tue:{
            start: "0800",
            end: "1600"
        },
        wed:{
            start: "0800",
            end: "1600"
        },
        thu:{
            start: "0800",
            end: "1600"
        },
        fri:{
            start: "0800",
            end: "1600"
        },
        sat:{
            start: "0800",
            end: "1600"
        },
        sun:{
            start: 0,
            end: 0
        }
    }
},
{
    area:'Mississauga',
    labId: 474,
    address1: "204 - 3420 Hurontario St ",
    city: "Mississauga",
    province: "ON",
    postalCode: "L5B 4A9",
    contact: {
        phone: 9058488100,
        fax: 9058488101
    },
    operationHours:{
        mon:{
            start: "0830",
            end: "1630"
        },
        tue:{
            start: "0830",
            end: "1630"
        },
        wed:{
            start: "0830",
            end: "1630"
        },
        thu:{
            start: "0830",
            end: "1630"
        },
        fri:{
            start: "0830",
            end: "1630"
        },
        sat:{
            start: "0800",
            end: "1300"
        },
        sun:{
            start: 0,
            end: 0
        }
    }
},
{
    area:'North York',
    labId: 101,
    address1: "212 - 2100 Finch Ave W ",
    city: "North York",
    province: "ON",
    postalCode: "M3N 2Z9",
    contact: {
        phone: 4166656142,
        fax: 4166652131
    },
    operationHours:{
        mon:{
            start: "0800",
            end: "1700"
        },
        tue:{
            start: "0800",
            end: "1700"
        },
        wed:{
            start: "0800",
            end: "1630"
        },
        thu:{
            start: "0800",
            end: "1630"
        },
        fri:{
            start: "0800",
            end: "1700"
        },
        sat:{
            start: "0800",
            end: "1600"
        },
        sun:{
            start: 0,
            end: 0
        }
    }
}
]
function sccLocations(){
    let areas = []
    labs.map((lab) => areas.push(lab.area))
    areas = [...new Set(areas)]
    return areas

}

export default labs
export {sccLocations}