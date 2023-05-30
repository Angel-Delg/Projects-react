import { JournalLayout } from "../Layout/JournalLayout"
import { NothingSeleted, NoteView } from "../views"

export const JournalPage = () => {
   return (
      <JournalLayout>
         <NothingSeleted />
         {/* <NoteView /> */}
      </JournalLayout>
   )
}