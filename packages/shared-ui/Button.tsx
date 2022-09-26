import React from 'react'

export function Button(props: any) {
  console.log('updating');
  return <button onClick={() => props.onClick()} >{props.children}</button>
}