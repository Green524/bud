export default {
    getAuthor(author) {
        let authorStr = "";
        for (const person of author) {
            if (person.name === undefined) {
                authorStr += person + " ";
            } else {
                authorStr += person.name + " ";
            }
        }
        return authorStr;
    }
}