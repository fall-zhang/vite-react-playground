
import React from 'react'
import * as XLSX from 'xlsx'
/* The live editor requires this function wrapper */
function TableToExcel() {
  const [__html, setHTML] = React.useState('')

  /* Load sample data once */
  React.useEffect(() => {
    /* Starting CSV data -- change data here */
    const csv = `\
This,is,a,Test
வணக்கம்,สวัสดี,你好,가지마
1,2,3,4`

    /* Parse CSV into a workbook object */
    const wb = XLSX.read(csv, { type: 'string' })

    /* Get the worksheet (default name "Sheet1") */
    console.log(wb)
    const ws = wb.Sheets.Sheet1

    /* Create HTML table */
    // setHTML(XLSX.utils.sheet_to_html(ws, { id: 'tabeller' }))
    console.log(XLSX.utils.sheet_to_json(ws))
    console.log(XLSX.utils.json_to_sheet([
      { name: 'foo', age: 42, creer: 'manager' },
      { name: 'fall', age: 24, creer: 'developer' }
    ]))
  }, [])

  return (<>
    {/* Import Button */}
    <input type="file" onChange={async (e) => {
      /* get data as an ArrayBuffer */
      const file = e.target.files![0]
      const data = await file.arrayBuffer()

      /* parse and load first worksheet */
      const wb = XLSX.read(data)
      const ws = wb.Sheets[wb.SheetNames[0]]
      XLSX.utils.sheet_to_json(ws.Sheets, {})
      // setHTML()
    }} />

    {/* Export Button */}
    <button onClick={() => {

      /* Create worksheet from HTML DOM TABLE */
      const table = document.getElementById('tabeller')
      const wb = XLSX.utils.table_to_book(table)

      /* Export to file (start a download) */
      XLSX.writeFile(wb, 'SheetJSIntro.xlsx')
    }}><b>Export XLSX!</b></button>

    {/* Show HTML preview */}
    <div dangerouslySetInnerHTML={{ __html }} />
  </>)
}

// const TableToExcel: React.FC = () => {
//   return (<div>
//     这里面是一个导入导出为 excel 的文本文档
//   </div>)
// }

export default TableToExcel