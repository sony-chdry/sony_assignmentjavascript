
/* You will create a function that simulates fetching user data from two different sources. The function should combine the results and return a single object with all the user information. You will use Promises to handle the asynchronous operations.
    
    Instructions
    
    1. **Create two mock data fetching functions:**
        - `fetchUserProfile(userId)`: This function simulates fetching a user profile.
        - `fetchUserPosts(userId)`: This function simulates fetching user posts.
    2. **Create a function `getUserData(userId)` that:**
        - Fetches the user profile and user posts using the above mock data fetching functions.
        - Combines the results into a single object.
        - Returns a Promise that resolves with the combined user data.
    3. **Handle errors gracefully.** */
function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve({
                    userId: 1,
                    name: 'John Doe',
                    email: 'john.doe@example.com'
                });
            } else {
                reject('User profile not found');
            }
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { postId: 1, content: 'Hello World' },
                    { postId: 2, content: 'JavaScript is awesome' }
                ]);
            } else {
                reject('User posts not found');
            }
        }, 1000);
    });
}

function getUserData(userId) {
    return Promise.all([fetchUserProfile(userId), fetchUserPosts(userId)])
        .then(results => {
            const [profile, posts] = results;
            return {
                ...profile,
                posts: posts
            };
        })
        .catch(error => {
            console.error(error);
            throw new Error('Failed to fetch user data');
        });
}

getUserData(1)
    .then(userData => {
        console.log('User Data:', userData);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

getUserData(2)
    .then(userData => {
        console.log('User Data:', userData);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
