
const Category = (props) => {
    const { catId, catName } = props.data;
    return (

        <div class="col-sm-3">
            <div class="card">
                < img src = "http://placehold.it/400" className="card-image-top" />
                <div class="card-body">
                    <h5 class="card-title">{catName}</h5>


                </div>
            </div>

        </div>

    );
};
export default Category;