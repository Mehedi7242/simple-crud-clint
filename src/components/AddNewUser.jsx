import React from 'react';

const AddNewUser = () => {
    const handleAddUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const comment = form.comment.value;
        const user = { name, email, comment };
        console.log(user);
        form.reset();
    
        fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };
    return (
        <div className="max-w-lg mx-auto p-4 sm:p-6 md:p-8 bg-gray-50 border rounded-lg shadow-lg">
            <form onSubmit={handleAddUser} className="space-y-4">
            
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>

                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Gmail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>

                <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                <input
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add Your Comment"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                </div>
                
                <div>
                <input
                    type="submit"
                    value="Add User"
                    className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
                />
                </div>
            </form>
        </div>

    );
};

export default AddNewUser;