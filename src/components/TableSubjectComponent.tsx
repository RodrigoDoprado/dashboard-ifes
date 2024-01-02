/* eslint-disable @typescript-eslint/no-explicit-any */
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import ModalSubjectComponet from './ModalSubjectComponent';
import { deleteSubject } from '../api/SubjectApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetAllSubject } from '../hooks/subject/useGetAllSubject';

type data = {
  idPeriodInteface: any;
  titlePeriodInteface: any;
};

function TableSubjectComponent({
  idPeriodInteface,
  titlePeriodInteface,
}: data) {
  // const [subjects, setSubjects] = useState<SubjectInterface[]>([]);

  // useEffect(() => {
  //   getAllSubject();
  // }, []);

  // const getAllSubject = async () => {
  //   const response = await getSubjects(idPeriodInteface);
  //   if (response.status === 200) {
  //     setSubjects(response.data);
  //   }
  // };

  const {subjects}=useGetAllSubject(idPeriodInteface)

  const handledeleteSubject = async (id: string | undefined) => {
    if (window.confirm('Deseja Excluir a Matéria?')) {
      const response = await deleteSubject(id);
      if (response.status === 200) {
        // toast.success(response.data);
        // getAllSubject();
      }
    }
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead>
            <tr>
              {/* <th scope="col"></th> */}
              <th scope="col"></th>
              <th scope="col">Sigla</th>
              <th scope="col">Matéria</th>
              <th scope="col">Professor</th>
              <th scope="col">Configuração</th>
            </tr>
          </thead>
          <tbody>
            {subjects?.map((item) => {
              return (
                <tr>
                  {/* <th scope="row">{index+1}</th> */}
                  <td>
                    <img
                      src={item.avatar}
                      alt={item.title}
                      width="45"
                      height="35"
                    />
                  </td>
                  <td>{item.acronym}</td>
                  <td>{item.title}</td>
                  <td>Anderson Coelho</td>
                  <td>
                    <div className="gap-1 d-flex">
                      <ModalSubjectComponet
                        idInteface={item.id}
                        titleInteface={item.title}
                        acronymInteface={item.acronym}
                        avatarInteface={item.avatar}
                        idPeriodInteface={idPeriodInteface}
                        titlePeriodInteface={titlePeriodInteface}
                      />
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => handledeleteSubject(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default TableSubjectComponent;
