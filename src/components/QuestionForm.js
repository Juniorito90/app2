import { useState } from "react";

function QuestionForm() { 
    const [inputValue, setInputValue] = useState("Poser votre question ici");
    const isInputError = inputValue.includes('f')

    return (
        <div>

            {isInputError && (
                <div>🔥 Vous n'avez pas le droit d'utiliser la lettre "f" ici.</div>
            )}

            <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>

        </div>
    )
}
 
export default QuestionForm