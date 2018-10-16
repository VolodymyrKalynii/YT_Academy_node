
const salary = 400;
const friends = ['fr1', 'fr2', 'fr2'];
const sober = true;

class Husband {
    getSalary() {
        return `${salary} \n`
    }

    getFriends() {
        return `${friends} \n`
    }

    getSober() {
        return `${sober} \n`
    }
}

module.exports.Husband = Husband;