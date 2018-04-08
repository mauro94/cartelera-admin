import AvatarEl from './UserAvatar'
import CalloutEl from './Callout'
import CheckboxEl from './Checkbox'
import DropdownEl from './Dropdown'
import ErrorEl from './Error'
import * as Form from './Form'
import * as Input from './Input'
import * as Modal from './Modal'
import PasswordEl from './Password'
import PillEl from './Pill'
import * as TagElements from './Tag'

export const Callout = CalloutEl
export const Checkbox = CheckboxEl
export const Dropdown = DropdownEl
export const ErrorElement = ErrorEl
export const Password = PasswordEl
export const Pill = PillEl
export const UserAvatar = AvatarEl

export const EmailComponent = Input.EmailComponent
export const PasswordComponent = Input.PasswordComponent
export const SelectComponent = Input.SelectComponent
export const TextComponent = Input.TextComponent

export const FormComponent = Form.FormComponent
export const FormEntry = Form.Entry
export const SubmitButton = Form.SubmitButton

export const FeedbackModal = Modal.Feedback
export const ConfirmationModal = Modal.Confirmation

export const Tag = TagElements.Tag
export const TagIcon = TagElements.TagIcon