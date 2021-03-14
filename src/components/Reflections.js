import xbutton from '../images/xbutton.svg'

const Reflections = (props) => {

    function why() {
        props.click({visibility: "hidden"})
    }


    return (
        <div className="reflectionsContainer">
            <img className="xbutton" src={xbutton} onClick={()=>{props.click({visibility: "hidden"})}}/>
            <p>
                2021/02/26
                <br/>
                Learnt how to use useState hook thing to save state variables (saving user input)
                <br/>
                using props in components, in this case passing the array through to display in the display area component
                <br/><br/>
                2021//02/27
                <br/>
                Finding out random things about file structure and imports  (CSS files and stuff)
                <br/>
                State (context of constantly changing array while being sorted) is confusing, need to understand it
                <br/>
                Dealt with array not updating even though it was being sorted correctly
                <br/><br/>

                2021/02/28
                <br/>
                Learnt that javascript arrays are just references and in order to actually clone an array, have to use [...xyz]
                <br/>
                Managed to get sorter working but have to clarify why i had to use [...] syntax for a specific case
                <br/>
                Now that bubble sort is a success, will look at refining current solution before adding more sort methods.
                <br/>
                Changing functionality so that instead of sort button generating and sorting at the same time, split it up so that there's a button to generate an array based on user input, and a separate sort button
                <br/>
                Doing random aesthetic stuff with css here and there
                <br/><br/>
                2021/03/02
                <br/>
                Random playing around with a border on the display area, using a variable to determine whether the display area should show the border or not (if array size is 0 then border should not be visible because it shows by default)
                <br/><br/>
                2021/03/03
                <br/>
                Running into an issue where button does not seem to update react use states on first click, but only updates on 2nd+ clicks...this is causing the generate array button to fail to render/update the graph unless i click it twice...
                <br/>
                console log is telling me the usestate setter method for sortArray is not actually updating it.
                <br/>
                Research tells me that react hooks run asynchronously which would explain why it wasn't immediately updating the array.
                <br/>
                Used useffect() to resolve this issue so that react renders the array only after it changes (so wait till sortArray changes before updating)
                <br/>
                ternary operators are sick
                <br/><br/>
                2021/03/04
                <br/>
                Created the reflections bit so i can access logs on the app. While creating this, used a hook for visibility of the reflections overlay, which involved passing the hook function as a prop to the Reflections object.
                <br/>
                Learnt that when doing so, have to use the passed in hook function (props) within arrow function in the onClick instead of calling the props directly from onClick
                <br/><br/>
                2021/03/06
                <br/>
                Implementing quicksort algorithm without looking up code for extra challenge, not sure if I should've jumped the gun going from bubble sort to quicksort just like that...
                <br/>
                Quicksort implemented, now need to animate it
                <br/><br/>
                2021/03/08
                <br/>
                figuring out how to animate quicksort, implemented animation changes every time a sort happens but i realised this is not that great since it doesn't represent the recursiveness of quicksort
                <br/>
                in order for quick sort to make sense, i need to start changing bar colours while animating so that i can see comparisons etc, this would make it useful in general for every sorting algorithm.
                <br/>
                To achieve this, modified array from numerical array to array that holds objects, which then contains the numerical value along with a colour value. Means i had to use .map a lot more whenever it was necessary
                <br/><br/>
                2021/03/09
                <br/>
                Made a sensible modification to the animation of Bubble Sort to indicate sorted bars as green, budget "hard-codey" solution but will modify to a better one later on
                <br/>
                Animating quicksort was aids, wanted to indicate sorted bars as green so turned the array from a numerical array into an array containing objects with a number and color that was passed through the whole
                quicksort process but found out that OBJECTS WITHIN ARRAYS ACT AS REFERENCES AND THUS CANNOT BE CLONED IN A SHALLOW COPY.
                <br/>
                Modified to using a separate array to just store sorted bar indexes :( much boring such zzz
                <br/><br/>
                2021/03/13
                <br/>
                Gonna change array size and delay to a user input using sliders
                QUESTION FOR LATER RESEARCH: input sliders with onchange events which update state values works AFTER you move the sliders, how to make react set state using default values on first render/load?
                TEMPORARY SOLUTION = set default value for usestate based on a variable, input defaultvalue will also be variable for consistency...   
                <br/>
                Started off using 2 separate onchange functions for barcount and delay inputs, realised i can use e.target.id and just have one function :O     
                Since for the delay, when the slider is HIGHER we want LESS delay (smaller value when higher value), will use negative values for input and then use absolute value, budget thinking hehe
                SIOIJOSEJIFJISEFPJSEPF NICE NICE NICE NICE SPEED CONTROLS LITTTTT
                <br/><br/>
                2021/03/14
                <br/>
                Bugfix: Found a bug where the array size and delay state variables would cause the array size and delays to be changed mid animation, fixed this by disabling setState functions upon the respective onChange events when an animation was in progress.
                Animation is determined to be in progress based on a simple state variable.
            </p>
        </div>
    )
}

export default Reflections