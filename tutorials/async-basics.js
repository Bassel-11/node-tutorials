/**
 * Tutorial: Asynchronous JavaScript Basics
 * 
 * Learn about callbacks, promises, and async/await in Node.js
 */

console.log('⚡ Asynchronous JavaScript Basics Tutorial');
console.log('=========================================');
console.log('');

// 1. Callback example
console.log('1. Callback Example');
console.log('-------------------');

function fetchUserData(userId, callback) {
    // Simulate async operation with setTimeout
    console.log(`   📡 Fetching user data for ID: ${userId}...`);
    
    setTimeout(() => {
        const userData = {
            id: userId,
            name: 'John Doe',
            email: 'john@example.com'
        };
        callback(null, userData);
    }, 1000);
}

fetchUserData(123, (error, data) => {
    if (error) {
        console.error('   ❌ Error:', error);
    } else {
        console.log('   ✅ User data received:', data);
        
        // Continue with Promise example after callback completes
        demonstratePromises();
    }
});

// 2. Promise example
function demonstratePromises() {
    console.log('');
    console.log('2. Promise Example');
    console.log('------------------');
    
    function fetchUserDataPromise(userId) {
        console.log(`   📡 Fetching user data with Promise for ID: ${userId}...`);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId > 0) {
                    const userData = {
                        id: userId,
                        name: 'Jane Smith',
                        email: 'jane@example.com'
                    };
                    resolve(userData);
                } else {
                    reject(new Error('Invalid user ID'));
                }
            }, 1000);
        });
    }
    
    fetchUserDataPromise(456)
        .then(data => {
            console.log('   ✅ Promise resolved with user data:', data);
            return fetchUserDataPromise(789); // Chain another promise
        })
        .then(data => {
            console.log('   ✅ Second promise resolved:', data);
            
            // Continue with async/await example
            demonstrateAsyncAwait();
        })
        .catch(error => {
            console.error('   ❌ Promise rejected:', error.message);
        });
}

// 3. Async/Await example
async function demonstrateAsyncAwait() {
    console.log('');
    console.log('3. Async/Await Example');
    console.log('----------------------');
    
    async function fetchUserDataAsync(userId) {
        console.log(`   📡 Fetching user data with async/await for ID: ${userId}...`);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userData = {
                    id: userId,
                    name: 'Bob Johnson',
                    email: 'bob@example.com'
                };
                resolve(userData);
            }, 1000);
        });
    }
    
    try {
        const userData = await fetchUserDataAsync(999);
        console.log('   ✅ Async/await user data:', userData);
        
        // Multiple async operations
        console.log('   📡 Fetching multiple users...');
        const [user1, user2] = await Promise.all([
            fetchUserDataAsync(100),
            fetchUserDataAsync(200)
        ]);
        
        console.log('   ✅ Multiple users fetched:');
        console.log('     User 1:', user1);
        console.log('     User 2:', user2);
        
        console.log('');
        console.log('✅ Asynchronous JavaScript tutorial completed!');
        console.log('   Try creating your own tutorial in the tutorials/ directory!');
        
    } catch (error) {
        console.error('   ❌ Async/await error:', error.message);
    }
}

console.log('⏱️  Starting asynchronous operations...');
console.log('   (This tutorial will take a few seconds to complete)');