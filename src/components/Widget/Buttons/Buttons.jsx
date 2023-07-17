const Buttons = (buttons) => {
    return (
        buttons.forEach(button => {
            return (
                <li key={button}><button type='button' id={button}>{button}</button></li>
            )
        })
    )
}

export default Buttons;