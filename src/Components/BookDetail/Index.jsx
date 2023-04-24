const BookDetail = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper">
                        <img src= { image } alt="" classname="img img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h1> { title }</h1>
                        <p>{ description } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BookDetail;