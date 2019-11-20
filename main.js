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
        let questionIndex = this._drawNumber();

        if (questionIndex !== -1) {
            return this.questions[questionIndex];
        }  else {
            return null;
        }
    }

    _drawNumber() {
        let index;

        if (this._checkIfAsked().length) {
            let drawnNumber = Math.floor(Math.random() * this._checkIfAsked().length);

            /*
                Map function in this case create a new array contains all
                the questions id.
                IndexOf function here returns the smallest array returned by map()
                item index where this item value is equal to value given as indexOf()
                parameter which is one specific element drawn from the set of questions
                where their asked property is false.
                So index variable is the index of drawn questions id array item.
            */
            index = this.questions.map(question => {
                return question.id;
            }, this.questions).indexOf(this._checkIfAsked()[drawnNumber]);

            this.questions[index].asked = true;
        } else {
            index = -1;
        }
        return index;
    }

    _checkIfAsked() {
        let setOfQuestionsId = [];

        this.questions.forEach(question => {
            if (!question.asked) {
                setOfQuestionsId.push(question.id);
            }
        }, this);

        return setOfQuestionsId;
    }
}

class View {

}

class Controller {

}


let app = new Model();
console.log(app.getQuestion().correct);