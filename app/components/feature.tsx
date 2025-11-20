import classNames from "classnames"

interface CardProps {
    children?: any
    className?: string
}

export const Card = ({ children, className }: CardProps) => {
    return (
        <div className={classNames(className, "basis-1/2")}>
            {children}
        </div>
    )
}

interface TitleProps {
    children?: any
}

export function Title({ children }: TitleProps) {
    return (
        <h2 className="text-3xl font-bold mb-4 text-heading">
            {children}
        </h2>
    )
}

interface BodyProps {
    children?: any
    className?: string
}

export function Body({ children, className }: BodyProps) {
    return (
        <div className={classNames(className, "text-lg max-w-lg")}>
            {children}
        </div>
    )
}

interface FeatureFrameProps {
    children?: any
    className?: string
}

export function FeatureFrame({ children, className }: FeatureFrameProps) {
    return (
        <div className={classNames(className, "bg-sky-800/90 rounded-xl w-full h-100 basis-1/2 p-5 sm:p-10")}>
            {children}
        </div>
    )
}