import InputTitle from '../Components/Inputs/InputTitle';
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input';
import Alert from '../Components/Alert';
import Dropdown from '../Components/Dropdown/Dropdown';
import Textarea from '../Components/Inputs/Textarea';
import FileDragDrop from '../Components/FileDragDrop/FileDragDrop';
import UploadProgress from '../Components/UploadProgress';
import './Create.scss';

const options = [
  {
    id: '1',
    title: 'Option 1',
  },
  {
    id: '2',
    title: 'Option 2',
  },
  {
    id: '3',
    title: 'Option 3',
  },
];

function CreateCollection1() {
  return (
    <div className="create">
      <div className="create__wrap">
        <h3 className="create__title">Create Collection</h3>
        <div className="create__content">
          <div className="create__content-inner">
            <InputTitle required help>Logo Image</InputTitle>
            <Alert type="primary">Please upload images of your collection logo. 350x350 recommended.</Alert>
            <FileDragDrop boxTypeClass="drag-drop-create-collection" fileSizeLimit="10MB" />
            <UploadProgress
              fileName="Sub_01.jpg"
              fileSize="38MB"
              progress={40}
              onClickAbort={() => {}}
            />

            <InputTitle required>Collection Title</InputTitle>
            <Input name="title" placeholder="Type your item title here." />

            <InputTitle required help>Description</InputTitle>
            <Textarea placeholder="Type your contents here." maxLength={2000} />

            <InputTitle required>Blockchain</InputTitle>
            <Dropdown
              dropClass="rota-24"
              dropHeight="40px"
              dropTitle="Etherium"
              content={options}
            />

            <Button className="button button--black button--mid button--type1 create__btn-create" content="Create" disabled="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCollection1;
