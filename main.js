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
                Map function in this case creates a new array contains all
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
    constructor() {
        this.app = this.getElement('.container');

        this.gameContent = this.createElement('div', 'game-content');

        this.speakerImage = this.createElement('img', 'speaker');
        this.speakerImage.src = 'images/speaker-body.png';
        this.speakerImage.alt = 'Speaker';

        this.ironCarbonSystemImage = this.createElement('img' ,'iron-carbon_system');
        this.ironCarbonSystemImage.src = 'images/iron-carbon_system.png';
        this.ironCarbonSystemImage.alt = 'Układ żelazo-węgiel';

        this.questionForm = this.createElement('form', 'game-form');

        this.questionLabel = this.createElement('label');
        this.questionLabel.textContent = 'Niech Pan mi powie co to takiego jest ferryt?';

        this.answerContainer = this.createElement('div', 'answer-container');

        this.answerAButton = this.createElement('button', 'answer');
        this.spanA = this.createElement('span', 'special-info');
        this.spanA.textContent = 'A: ';

        this.answerBButton = this.createElement('button', 'answer');
        this.spanB = this.createElement('span', 'special-info');
        this.spanB.textContent = 'B: ';

        this.answerCButton = this.createElement('button', 'answer');
        this.spanC = this.createElement('span', 'special-info');
        this.spanC.textContent = 'C: ';

        this.answerDButton = this.createElement('button', 'answer');
        this.spanD = this.createElement('span', 'special-info');
        this.spanD.textContent = 'D: ';

        this.answerAButton.append(this.spanA);
        this.answerAButton.textContent = 'Graniczny roztwór węgla w żelazie alfa';

        this.answerBButton.append(this.spanB);
        this.answerBButton.textContent = 'Węglik żelaza o wzorze sumarycznym Fe3C';

        this.answerCButton.append(this.spanC);
        this.answerCButton.textContent = 'Graniczny roztwór węgla w żelazie beta';

        this.answerDButton.append(this.spanD);
        this.answerDButton.textContent = 'Mieszanina eutektoidalna perlitu i cementytu';

        this.answerContainer.append(this.answerAButton,
            this.answerBButton, this.answerCButton, this.answerDButton);

        this.questionForm.append(this.questionLabel, this.answerContainer);

        this.gameContent.append(this.speakerImage, this.ironCarbonSystemImage, this.questionForm);


    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        
        if (className) {
            element.classList.add(className);
        } 
        
        return element;
    }
    
    getElement(selector) {
        const element = document.querySelector(selector);
        
        return element;
    }
}

class Controller {

}


let app = new Model();
console.log(app.getQuestion().correct);