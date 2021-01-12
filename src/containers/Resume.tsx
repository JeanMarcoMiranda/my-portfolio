import React from 'react'
import { Document, Page } from 'react-pdf'
import { PDFJSStatic } from 'pdfjs-dist'
const samplePDF: PDFJSStatic = require('./1.pdf')


const ResumeComponent: React.FC = () => {
    return (
        <Document file={samplePDF}>
            <Page pageNumber={1} />
        </Document>
    )
}

export default ResumeComponent