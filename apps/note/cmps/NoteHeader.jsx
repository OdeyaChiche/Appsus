const { Link, NavLink } = ReactRouterDOM

export function NoteHeader() {

    return <header className="note-header">
             <span className="logo"><span className="material-icons">lightbulb</span>
             <h3>KEEP!</h3></span>
           
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}
