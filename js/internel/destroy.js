import { caf } from '../utils/animationFrame'

export default destroy

function destroy () {
    caf(this.renderRaf)
    caf(this.updateRaf)
}
