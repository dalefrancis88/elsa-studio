import {Graph, Shape, Node} from '@antv/x6';
import {DotNetComponentRef} from "./graph-bindings";
import {Activity} from "../models";

export class DotNetFlowchartDesigner {
    constructor(private componentRef: DotNetComponentRef) {
    }

    /// <summary>
    /// Raises the <see cref="ActivitySelected"/> event.
    /// </summary>
    async raiseActivitySelected(activity: Activity) : Promise<void> {
        await this.componentRef.invokeMethodAsync('HandleActivitySelected', activity);
    }

    /// <summary>
    /// Raises the <see cref="ActivitySelected"/> event.
    /// </summary>
    async raiseActivityEmbeddedPortSelected(activity: Activity, portName: string) : Promise<void> {
        await this.componentRef.invokeMethodAsync('HandleActivityEmbeddedPortSelected', activity, portName);
    }
    
    /// <summary>
    /// Raises the <see cref="CanvasSelected"/> event.
    /// </summary>
    async raiseCanvasSelected() : Promise<void> {
        await this.componentRef.invokeMethodAsync('HandleCanvasSelected');
    }

    /// <summary>
    /// Raises the <see cref="GraphUpdated"/> event.
    /// </summary>
    async raiseGraphUpdated() : Promise<void> {
        await this.componentRef.invokeMethodAsync('HandleGraphUpdated');
    }

    /// <summary>
    /// Raises the <see cref="GraphUpdated"/> event.
    /// </summary>
    async raisePasteCellsRequested(activityCells: any[], edgeCells: any[]) : Promise<void> {
        await this.componentRef.invokeMethodAsync('HandlePasteCellsRequested', activityCells, edgeCells);
    }
}