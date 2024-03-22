
export type userType = {id: Number, name : String, role : String};
export type homeprops = {user: userType, login: (user:userType) => void, logout: () => void}
const HomePage = (props: homeprops) : JSX.Element => {

    const login = () => {
        props.login({id: 1, name: 'Sonal', role: 'Boss'})
    }   
    const logout = () => {
        props.logout()
    }

    return (
    <div>
        <h3>Welcome to the Payments application.</h3>
        <div>
            {props.user.name} is the {props.user.role}
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>    
    </div>);
}

export default HomePage;