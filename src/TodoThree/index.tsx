import React, { useState } from 'react'
import { Input, Button } from 'antd'
interface FromFahter {
    operateValue: (i: string | number) => void
}
interface FromFatherList {
    setList: (string | number)[],
    delList: (i: number) => void
}
const Top = ({ operateValue }: FromFahter) => {
    const [value, setValue] = useState("")
    const add = () => {
        // 将当前值传给父组件
        operateValue(value)
        // 清空当前值
        setValue('')
    }
    return (
        <div>
            <Input value={value} onChange={(e) => { setValue(e.target.value) }}></Input>
            <Button onClick={add}>添加</Button>
        </div>
    )
}
const List = ({ setList, delList }: FromFatherList) => {
    return (
        <div>
            <ul>
                {setList.map((e, i) => {
                    return (
                        <li key={i}>{e} <Button onClick={() => delList(i)}>删除</Button></li>
                    )
                })}
            </ul>
        </div>
    )
}
const TodoThree = () => {
    const [list, setList] = useState<(string | number)[]>([])
    const saveValue = (sonValue: number | string) => {
        setList([...list, sonValue])
    }
    const filterList = (sonValue: number) => {
        setList(list.filter((e, i) => sonValue !== i))
    }
    return (
        <div>
            <Top operateValue={saveValue} />
            <List setList={list} delList={filterList} />
        </div>
    )
}
export default TodoThree
