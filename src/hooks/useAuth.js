const { useContext } = require("react")
const { AuthContext } = require("../Components/Context/AuthProvider")

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;