import { Component } from 'react';
import './documents.scss';
import { data } from './data';

interface IDocumentItem {
    title: string,
    url: string
}

interface IDocumentState {
    selectedYear: number;
    selectedFile: number;
}

class Document extends Component {

    state: IDocumentState = {
        selectedYear: 0,
        selectedFile: 0
    }

    onYearClick = (e: React.MouseEvent<HTMLInputElement>) => {
        this.setState({
            selectedYear: e.currentTarget.dataset.index,
            selectedFile: 0
        })
    }

    onFileClick = (e: any) => {
        this.setState({
            selectedFile: e.currentTarget.dataset.index
        })
    }

    render() {
        const files: Array<IDocumentItem> = data[this.state.selectedYear].files;
        const years: Array<number> = [2020, 2019, 2018];
        return (
            <div className="container documents mt-4">
                <div className="selector d-flex flex-column-reverse flex-md-row align-items-md-end">
                    <h2 className="mb-0">DOCUMENTOS</h2>
                    <div className="tabs-container d-flex">
                        {years.map((year, index) => {
                            return (
                                <div role="button" tabIndex={0} 
                                onClick={this.onYearClick} className={`year-tab ${this.state.selectedYear == index ? 'active' : ''}`} 
                                data-index={index}>{year}</div>
                            )
                        })}
                    </div>
                </div>
                <div className="items-container mb-4 w-100">
                    <ul className="mb-0">
                        {files.map((item, index) => {
                            return (
                                <li>
                                    <a className={`file-item ${this.state.selectedFile == index ? 'active' : ''}`}
                                    onClick={this.onFileClick}
                                    href={item.url}
                                    data-index={index}
                                    target="content">{item.title}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="visualizador mb-5">
                    <iframe name="content" id="visualizador" src={files[0].url}></iframe>
                </div>
            </div>
        )
    }
}

export default Document;