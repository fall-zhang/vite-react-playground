import React from 'react'
export default function (props: any) {
  return <div className="content-layout">
    <div className="title">
      <section className='header'>
        <slot name="title">
          <div className="title-text">{props.title}</div>
        </slot>
        <slot name="header-right">
        </slot>
      </section>
    </div>
    <slot></slot>
    <style >
      {`
.content-layout {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-bottom: 0;
  border-radius: 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .07), 0 1px 4px rgba(0, 0, 0, .1), 0 2px 6px rgba(0, 0, 0, .08);
}

.title {
  display: flex;
  align-items: center;
  padding: 10px 12px;
  user-select: none;
  border-bottom: 1px solid #eee;

}
  .title-text {
    font-size: 18px;
    font-weight: 550;
  }
`}
    </style>
  </div>
}
