import { List  } from "react-window";

const records = Array.from({ length: 10000 }, (_, i) => { 
    return {
        id: `id-${i+1}`,
        name:`User-${i+1}`
    }
});


function Row({ index, style }) {
    const user = records[index];
        return (
            <p className='flex border-b border-gray-300 flex-row px-4 py-1.5' style={style}>
                <span className="w-1/2 ">{user.id}</span>
                <span>{user.name}</span>
            </p>
        );
    }

const Virtualization = () => {
        return (
            <div className="w-full bg-orange-50">

            <List
                rowComponent={Row}
                rowCount={records.length}
                rowHeight={35}
                rowProps={{ records }}
                    className='bg-red-100 h-150 w-full'
                />

            </div>
        )
    }
export default Virtualization;