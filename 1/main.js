const tasks = [
    { id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task' },
    { id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task' },
    { id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task' },
    { id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task' },
    { id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug' },
    { id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug' },
    { id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug' },
]

const getInfo = () => {
    let sumCategory = 0
    let sumType = 0
    let countUI = 0
    let countFront = 0
    let countBack = 0
    const More4Hours = []

    tasks.reduce((accumulator, currentValue) => {
        if (currentValue.category === 'Frontend') {
            sumCategory += currentValue.timeSpent
            countFront++
        }
        if (currentValue.category === 'Backend') countBack++
        if (currentValue.type === 'bug') sumType += currentValue.timeSpent
        if (currentValue.timeSpent > 4) {
            const taskInfo = [currentValue.title, currentValue.type]
            More4Hours.push(taskInfo)
        }
    })

    tasks.map((item) => {
        const splitString = item.title.split(' ')
        splitString.filter((item) => {
            if (item === 'UI') countUI++
        })
    })

    const typeTasks = { Frontend: countFront, Backend: countBack }

    console.log(`
Общее время затраченное на 'Frontend' - ${sumCategory}
Общее время затраченное на задачу типа 'Bug' = ${sumType}
Количество названий со словом UI - ${countUI}
`)
    console.log(typeTasks)
    console.log(More4Hours)
}

getInfo()