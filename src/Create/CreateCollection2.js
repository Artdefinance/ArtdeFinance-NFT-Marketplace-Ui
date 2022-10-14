import InputTitle from '../Components/Inputs/InputTitle';
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input';
import Alert from '../Components/Alert';
import Dropdown from '../Components/Dropdown/Dropdown';
import Textarea from '../Components/Inputs/Textarea';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';
import './Create.scss';

const options = [
  {
    id: '1',
    title: 'artwork mint collection',
  },
  {
    id: '2',
    title: 'Etherium',
  },
  {
    id: '3',
    title: 'Option 3',
  },
];

function CreateCollection2() {
  return (
    <div className="create">
      <div className="create__wrap">
        <h3 className="create__title">Create Collection</h3>
        <div className="create__content">
          <div className="create__content-inner">
            <InputTitle required help>Logo Image</InputTitle>
            <Alert type="primary">Please upload images of your collection logo. 350x350 recommended.</Alert>
            <FileDragDrop
              boxTypeClass="drag-drop-create-collection"
              currentImageUrl="https://source.unsplash.com/random/288x288/?art"
              defaultFilesnames={[{
                icon: 'JPG',
                name: 'fake.jpg',
                size: 959824,
              }]}
            />

            <InputTitle required>Collection Title</InputTitle>
            <Input name="title" placeholder="Type your item title here." getValue="artwork mint collection" />

            <InputTitle required help>Description</InputTitle>
            <Textarea placeholder="Type your contents here." maxLength={2000} defaultValue="artwork mint collection" />

            <InputTitle required>Blockchain</InputTitle>
            <Dropdown
              dropClass="rota-24"
              dropHeight="40px"
              dropTitle="Etherium"
              content={options}
              defaultSelectedId="2"
            />

            <div className="create__buttons">
              <Button className="button button--black-line button--mid button--type1 create__btn-delete" content="Delete" />
              <Button className="button button--black button--mid button--type1 create__btn-update" content="Update" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCollection2;
