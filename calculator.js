function calcbutton(self)
        {
            let input=document.getElementById("input"); //by this input tag is selected

            if (self == 'Clr')
            {
                location.reload();
            }
            else if (self == '=')
            {
                let answer=eval(input.value);
                input.value = `${answer}`; 
            }
            else
            {
                input.value += `${self}`;
            }

        }
        