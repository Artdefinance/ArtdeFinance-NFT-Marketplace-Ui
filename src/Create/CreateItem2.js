import Button from '../Components/Button/Button';
import './Create.scss';

function CreateItem2() {
  return (
    <div className="create">
      <div className="create__wrap">
        <h3 className="create__title">Create item</h3>
        <div className="create__content create__content--center">
          <div className="create__content-inner">
            <div className="create__empty-img">
              <img src="/assets/images/common/collection-create.png" alt="" width="419" height="288" />
            </div>
            <p className="create__empty-msg">
              There are no collections yet.
              <br />
              Please create a collection before creating an item.
            </p>
            <Button type="type1" className="button button--black button--mid create__btn-collection" content="Create a collection" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateItem2;
