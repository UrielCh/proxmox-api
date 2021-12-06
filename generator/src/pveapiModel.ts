export type PveHttpMtd = "DELETE" | 'GET' | 'PUT' | 'POST';

export interface PveCommon {
    description?: string;
    verbose_description?: string;
    optional?: 0 | 1;
}

export interface PveFormatNumber extends PveCommon {
    type: 'integer' | 'number';
    default?: 1024 | 1000 | 5 | 1 | 0,
    maximum?: number,
    minimum?: number,
    format_description?: string;
}

export interface PveFormatBoolean extends PveCommon {
    type: 'boolean';
    default_key?: 1;
    default?: 0;
}

export interface PveFormatString extends PveCommon {
    type: 'string';
    default?: string,
    format_description?: string;
    maxLength?: number;
    default_key?: 1;
    format?: string;
    enum?: string[];
    pattern?: string;
}

export interface PveFormatAlias extends PveCommon {
    alias?: string;
    keyAlias? : "model";
}

export type PveFormat = PveFormatNumber | PveFormatBoolean | PveFormatString | PveFormatAlias;

export interface PveParametersCommon extends PveCommon {
    additionalProperties?: 0 | 1;
}

export interface PveParametersNumber extends PveParametersCommon {
    type: "number";
    // format?: string;
    minimum?: number,
    maximum?: number,
    default?: string | number;
    typetext?: string;
    renderer?: 'bytes' | "timestamp" | 'timestamp_gmt' | 'duration' | 'fraction_as_percentage';
    title?: string; // only inside items
    // reference to an other key of the current object
    requires?: string; // "delete" | "todisk" | "archive" | "db_dev" | "wal_dev";
}

export interface PveParametersInteger extends PveParametersCommon {
    type: "integer";
    format?: string;
    minimum?: number,
    maximum?: number,
    default?: string | number; // value or text like same as
    typetext?: string;
    // renderer?: 'duration';
    renderer?: 'bytes' | "timestamp" | 'timestamp_gmt' | 'duration' | 'fraction_as_percentage';
    title?: string; // only inside items
    // reference to an other key of the current object
    requires?: string; // "delete" | "todisk" | "archive" | "db_dev" | "wal_dev";
}


export interface PveParametersString extends PveParametersCommon {
    type: 'string';
    title?: string; // only inside items
    format?: string | {[name: string]: PveFormat}; // "mac-addr",
    minLength?: number;
    maxLength?: number;
    enum?: string[];
    default?: string | null;
    // // reference to an other key of the current object
    requires?: string; // "delete" | "todisk" | "archive" | "db_dev" | "wal_dev";
    pattern?: string;
    format_description?: string;
    typetext?: string; //"<boolean>" | "<string>" | "<integer>" | "<integer> (0 - N)" | "<number> (1 - N)" | "<integer> (1 - N)" | "[address=]<IP> [,priority=<integer>]"|"[[type=]<enum>] [,memory=<integer>]"|"<integer> (0 - 8)"| "<volume>"| "[meta=<volume>] [,network=<volume>] [,user=<volume>]"|"<integer> (16 - N)"| "<number> (0 - N)" | "<type>:<name>"| "<node>[:<pri>]{,<node>[:<pri>]}*"|"<name>"|"[gw=<GatewayIPv4>] [,gw6=<GatewayIPv6>] [,ip=<IPv4Format/CIDR>] [,ip6=<IPv6Format/CIDR>]"|"[file=]<volume> [,aio=<native|threads>] [,backup=<1|0>] [,bps=<bps>] [,bps_max_length=<seconds>] [,bps_rd=<bps>] [,bps_rd_max_length=<seconds>] [,bps_wr=<bps>] [,bps_wr_max_length=<seconds>] [,cache=<enum>] [,cyls=<integer>] [,detect_zeroes=<1|0>] [,discard=<ignore|on>] [,format=<enum>] [,heads=<integer>] [,iops=<iops>] [,iops_max=<iops>] [,iops_max_length=<seconds>] [,iops_rd=<iops>] [,iops_rd_max=<iops>] [,iops_rd_max_length=<seconds>] [,iops_wr=<iops>] [,iops_wr_max=<iops>] [,iops_wr_max_length=<seconds>] [,mbps=<mbps>] [,mbps_max=<mbps>] [,mbps_rd=<mbps>] [,mbps_rd_max=<mbps>] [,mbps_wr=<mbps>] [,mbps_wr_max=<mbps>] [,media=<cdrom|disk>] [,model=<model>] [,replicate=<1|0>] [,rerror=<ignore|report|stop>] [,secs=<integer>] [,serial=<serial>] [,shared=<1|0>] [,size=<DiskSize>] [,snapshot=<1|0>] [,ssd=<1|0>] [,trans=<none|lba|auto>] [,werror=<enum>] [,wwn=<wwn>]"|"size=<integer> [,name=<string>]";
    renderer?: 'bytes';
}

export interface PveParametersBoolean extends PveParametersCommon {
    type: 'boolean';
    default?: number | '1' | '0' | "yes" | 'off';
    // @since PVE 7
    title?: string;
    // reference to an other key of the current object
    requires?: string; // "delete" | "todisk" | "archive" | "db_dev" | "wal_dev";
    typetext?: string; //"<boolean>" | "<string>" | "<integer>" | "<integer> (0 - N)" | "<number> (1 - N)" | "<integer> (1 - N)" | "[address=]<IP> [,priority=<integer>]"|"[[type=]<enum>] [,memory=<integer>]"|"<integer> (0 - 8)"| "<volume>"| "[meta=<volume>] [,network=<volume>] [,user=<volume>]"|"<integer> (16 - N)"| "<number> (0 - N)" | "<type>:<name>"| "<node>[:<pri>]{,<node>[:<pri>]}*"|"<name>"|"[gw=<GatewayIPv4>] [,gw6=<GatewayIPv6>] [,ip=<IPv4Format/CIDR>] [,ip6=<IPv6Format/CIDR>]"|"[file=]<volume> [,aio=<native|threads>] [,backup=<1|0>] [,bps=<bps>] [,bps_max_length=<seconds>] [,bps_rd=<bps>] [,bps_rd_max_length=<seconds>] [,bps_wr=<bps>] [,bps_wr_max_length=<seconds>] [,cache=<enum>] [,cyls=<integer>] [,detect_zeroes=<1|0>] [,discard=<ignore|on>] [,format=<enum>] [,heads=<integer>] [,iops=<iops>] [,iops_max=<iops>] [,iops_max_length=<seconds>] [,iops_rd=<iops>] [,iops_rd_max=<iops>] [,iops_rd_max_length=<seconds>] [,iops_wr=<iops>] [,iops_wr_max=<iops>] [,iops_wr_max_length=<seconds>] [,mbps=<mbps>] [,mbps_max=<mbps>] [,mbps_rd=<mbps>] [,mbps_rd_max=<mbps>] [,mbps_wr=<mbps>] [,mbps_wr_max=<mbps>] [,media=<cdrom|disk>] [,model=<model>] [,replicate=<1|0>] [,rerror=<ignore|report|stop>] [,secs=<integer>] [,serial=<serial>] [,shared=<1|0>] [,size=<DiskSize>] [,snapshot=<1|0>] [,ssd=<1|0>] [,trans=<none|lba|auto>] [,werror=<enum>] [,wwn=<wwn>]"|"size=<integer> [,name=<string>]";
}

export interface PveCallParametersNull extends PveParametersCommon {
    type: "null";
}

export interface PveParametersArray extends PveParametersCommon {
    type: "array";
    // @since PVE 7
    title?: string;
    // if not set use a PveParametersString
    items?: PveParametersObject | PveParametersString | PveParametersArray | PveParametersNumber | PveParametersInteger, // subset of PveCallParameters,
    links?: { href: string, rel: "child" }[];
    renderer?: 'yaml';
}

export interface PveParametersObject extends PveParametersCommon {
    type: "object";
    // @since PVE 7
    title?: string;
    properties?: { [name: string]: PveParametersString | PveParametersArray | PveParametersBoolean | PveParametersObject | PveParametersInteger | PveParametersNumber};
}

export interface PveParametersUndef extends PveParametersCommon {
    type?: never;
    properties?: { [name: string]: PveParametersString | PveParametersArray | PveParametersBoolean | PveParametersObject | PveParametersInteger | PveParametersNumber};
}

// @since PVE 7
export interface PveParametersAny extends PveParametersCommon {
    type: "any";
}

export type PveCallParameters = PveParametersNumber | PveParametersInteger | PveParametersString | 
    PveParametersBoolean | PveCallParametersNull | PveParametersArray | 
    PveParametersObject | PveParametersUndef | PveParametersAny;

export type PceCheck = 1 | string | PceCheck[];

export interface PveCallDesc {
    allowtoken: 0 | 1;
    description: string;
    method: PveHttpMtd,
    name: string,
    parameters: {
        additionalProperties: 0 | 1;
        properties?: { [name: string]: PveCallParameters; }
        type?: 'object';
    };
    permissions?: {
        user?: "all" | 'world'
        description?: string;
        check?: PceCheck[];
    };
    protected?: 1;
    proxyto?: "node" | null;
    returns: PveCallParameters;
}
export interface pveApiNode {
    children?: pveApiNode[];
    info?: { //  {[key in PveHttpMtd]: PveCallDesc}
        DELETE?: PveCallDesc;
        GET?: PveCallDesc;
        PUT?: PveCallDesc;
        POST?: PveCallDesc;
    }
    leaf: number;
    path: string;
    text: string;
}
