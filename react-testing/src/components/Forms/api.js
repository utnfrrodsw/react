const getUser = () => {
    return fetch('/api/user').then(res => res.json())
}

export { getUser };