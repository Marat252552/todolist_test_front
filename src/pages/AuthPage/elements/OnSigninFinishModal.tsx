import Modal from '../../../ui/Modal'
import { OnSigninFinishModal_T } from '../lib/types'


const OnSigninFinishModal: OnSigninFinishModal_T = ({ modalActive, setModalActive }) => (
    <Modal active={modalActive} setActive={setModalActive}>
        <p>На указанную Вами почту отправлено письмо с ссылкой для подтверждения.</p>
        <p>Перейдите по ней, чтобы закончить регистрацию аккаунта</p>
    </Modal>
)

export default OnSigninFinishModal