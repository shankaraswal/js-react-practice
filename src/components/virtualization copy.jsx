import { List } from "react-window";


const records = Array.from({ length: 100000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
}));



function Row({ index, style }) {
    
    const user = records[index];
        return (
            <div style={style}>
            {user.id} - {user.name}
            </div>
        );
    }
    
const Virtualization = () => { 

    return (
        <>
            <h1>Virtualization</h1>
             <List
            rowCount={records.length}
            rowHeight={35}
            rowComponent={Row}
            rowProps={{}}
                style={{ height: 900, width: 1440, background: "#eeeeee" }}
            />
        </>
    )


}


export default Virtualization;