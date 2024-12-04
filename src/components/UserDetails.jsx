import { useEffect, useState } from "react";

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [reloadTrigger, setReloadTrigger] = useState(false); // To trigger reloads


    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/users'); // Replace with your actual API URL
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, [reloadTrigger]);

    const handleReload = () => {
        setReloadTrigger(!reloadTrigger); 
    };

    return (
        <div className="container mx-auto p-4">
            <h3 className="text-xl font-bold mb-4">User Details</h3>
            <button
                onClick={handleReload}
                className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
                Reload Data
            </button>
            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td className="border border-gray-300 px-4 py-2">{user._id}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.email || "No Email Provided"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {user.comment || "No Comment"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;
