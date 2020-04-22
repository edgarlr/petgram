import { withPhotos } from '../HoC/withPhotos'
import { ListOfPhotoCardsComponent } from '../Components/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
