import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  React.useEffect(() => {
    axios
      .get(`https://api.github.com/users/codeforreal1`, {})
      .then((response) => {
        setUser(response?.data)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }, [])

  return (
    <div>
      <>Username: {user?.name ?? ''} </>
      <button onClick={() => history.push('/404')}>Go to a random page</button>
    </div>
  )
}

function App_Solution1() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  React.useEffect(() => {
    let isUnmounted = false
    axios
      .get(`https://api.github.com/users/codeforreal1`, {})
      .then((response) => {
        if (!isUnmounted) {
          setUser(response?.data)
        }
      })
      .catch((error) => {
        console.log('Error', error)
      })
    return () => {
      isUnmounted = true
    }
  }, [])

  return (
    <div>
      <>Username: {user?.name ?? ''} </>
      <button onClick={() => history.push('/404')}>Go to a random page</button>
    </div>
  )
}

function App_Solution2() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  React.useEffect(() => {
    const abortController = new AbortController()
    axios
      .get(`https://api.github.com/users/codeforreal1`, {
        signal: abortController.signal,
      })
      .then((response) => {
        setUser(response?.data)
      })
      .catch((error) => {
        console.log('Error', error)
      })
    return () => {
      abortController.abort()
    }
  }, [])

  return (
    <div>
      <>Username: {user?.name ?? ''} </>
      <button onClick={() => history.push('/404')}>Go to a random page</button>
    </div>
  )
}

function App2() {
  const [count, setCount] = useState(0)
  const history = useHistory()

  React.useEffect(() => {
    setInterval(() => {
      setCount((lastCount) => lastCount + 1)
    }, 2000)
  }, [])

  return (
    <div>
      <>Count: {count} </>
      <button onClick={() => history.push('/404')}>Go to a random page</button>
    </div>
  )
}

function App2_Solution() {
  const [count, setCount] = useState(0)
  const history = useHistory()

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('---')
      setCount((lastCount) => lastCount + 1)
    }, 2000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div>
      <>Count: {count} </>
      <button onClick={() => history.push('/404')}>Go to a random page</button>
    </div>
  )
}

export default App
