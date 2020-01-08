
if (process.env.test_key === 'my_test_key1') {
    console.log('TESTS ARE SUCCESSFULLY COMPLETED!');
} else {
    throw 'this is wrong, no env found!';
}