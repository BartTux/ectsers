class Model {
    constructor() {
        this.questions = [
            { id: 1, question: 'Pytanie?', a: 'Ferryt', b: 'Perlit', c: 'Austenit', d: 'Ledeburyt', get correct() {return this.b} , asked: false },
            { id: 2, question: 'Pytanie?', a: 'Granica plastyczności', b: 'Granica doraźna', c: 'Granica sprężystości', d: 'Naprężenie rozrywające', get correct() {return this.a} , asked: false },
            { id: 3, question: 'Pytanie?', a: 'Moduł Kirchhoffa', b: 'Współczynnik Poissona', c: 'Linie Czernowa', d: 'Moduł Younga', get correct() {return this.d} , asked: false },
        ];
    }

    /*
     * TODO: Make this method to get an object from main questions
     * array by given random number
     */
    getQuestion() {
        let questionIndex = this._randomNumber();

        console.log(this.questions[questionIndex].correct);
    }

    /*
     * TODO: create a method that draw a number from set of given
     * objects array
    */
    _drawNumber() {

    }

    /*
     * TODO: create a method that check if the question were asked
     * and returns an array which is set of these objects.
    */
    _checkIfAsked() {

    }

    //TODO: divide this into several methods as above
    _randomNumber() {
        let set = [];
        let index;

        this.questions.forEach(question => {
           if (!question.asked) {
               set.push(question.id);
           }
        }, this);

        if (set.length !== 0) {
            let number = Math.floor(Math.random() * set.length);

            index = this.questions.map(question => {
                return question.id;
            }, this.questions).indexOf(set[number]);

            this.questions[index].asked = true;
        } else {
            index = -1;
        }
        return index;
    }
}

class View {

}

class Controller {

}


let app = new Model();
console.log(app.getQuestion());