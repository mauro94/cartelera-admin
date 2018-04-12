export { default as UserAvatar } from './UserAvatar'
export { default as Callout } from './Callout'
export { CheckboxPublished, CheckboxCanceled } from './Checkbox'
export { default as Dropdown } from './Dropdown'
export { default as ErrorElement } from './Error'
export { default as LoadingElement } from './Loading'
export { default as Password } from './Password'
export { default as Pill } from './Pill'

import * as Form from './Form'
import * as Input from './Input'
import * as Modal from './Modal'
import * as TagElements from './Tag'

export const EmailComponent = Input.EmailComponent
export const PasswordComponent = Input.PasswordComponent
export const SelectComponent = Input.SelectComponent
export const TextComponent = Input.TextComponent

export const FormComponent = Form.FormComponent
export const FormEntry = Form.Entry
export const SubmitButton = Form.SubmitButton

export const FeedbackModal = Modal.Feedback
export const ConfirmationModal = Modal.Confirmation
export const ModalAlert = Modal.Alert

export const Tag = TagElements.Tag
export const TagIcon = TagElements.TagIcon