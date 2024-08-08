"use client"

const Disclaimer: React.FC = () => {
    const message: string = ` All information provided on this site is for your benefit and convenience. 
    Yoska and its subsidiaries are not responsible for any transactions or actions taken based on the information 
    provided. Please verify details on the respective enterprises' websites for accuracy.`
    return (
        <div>
            <p className="text-muted-foreground p-2">
                <strong className="text-l">Disclaimer</strong>: <span className="text-sm">
                    {message}
                </span>
            </p>
        </div>
    )
}

export default Disclaimer;
